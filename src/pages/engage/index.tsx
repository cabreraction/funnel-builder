// external dependencies
import AWS from 'aws-sdk';
import { Geist, Geist_Mono } from "next/font/google";
import { GetServerSidePropsResult, GetServerSidePropsContext } from 'next';

// internal modules
import { EngageFunnel } from "@/features/engange-funnel";
// import { TContentfulFunnel } from '@/core/models/funnel.contentful.model';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const initialQuestions = [
  {
    questionContent: 'What is your age range?',
    answers: [
      '18-24',
      '25-34',
      '35+'
    ]
  },
  {
    questionContent: "What's your favorite sport",
    answers: [
      'Soccer',
      'Basketball',
      'Football',
    ]
  },
  {
    questionContent: 'If you could have a superpower, what would it be?',
    answers: [
      'Invisibility',
      'Super strength',
      'Teleportation',
    ]
  }
];

export async function getServerSideProps(props: GetServerSidePropsContext): 
Promise<
  GetServerSidePropsResult<any>
>  {
  AWS.config.update({
    region: 'us-east-1', // Replace with your region
    accessKeyId: process.env.AWS_ACCESS_KEY_ID, // Replace with your access key ID
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY // Replace with your secret access key
  });
  const polly = new AWS.Polly();
  const audioPromises = initialQuestions.map(question => {
    const params = {
      OutputFormat: 'mp3',
      Text: question.questionContent,
      VoiceId: 'Ruth',
      Engine: 'generative'
    };

    return polly.synthesizeSpeech(params).promise();
  });
  audioPromises.push(
    polly.synthesizeSpeech({
      OutputFormat: 'mp3',
      Text: 'Thank you for participating! your answers have been recorded and will be used to provide you with a personalized experience and the best possible match.',
      VoiceId: 'Ruth',
      Engine: 'generative'
    }).promise()
  )

  const audioData = await Promise.all(audioPromises);
  const audioUrls = audioData.map(data => {
    return `data:audio/mp3;base64,${Buffer.from(data.AudioStream as ArrayBuffer).toString('base64')}`;
  });

  const questionsWithAudio = initialQuestions.map((question, index) => ({...question, audioUrl: audioUrls[index]}));

  return {
    props: {
      questions: questionsWithAudio, 
      feedbackMessage: audioUrls[audioUrls.length - 1]
    }
  }
}

interface EngageFunnelPageProps {
  questions: {
    audioUrl: string;
    answers: string[];
    questionContent: string;
  }[];
  feedbackMessage: string;
}

export default function EngageFunnelPage({questions, feedbackMessage}: EngageFunnelPageProps) {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} w-full min-h-screen font-[family-name:var(--font-geist-sans)]`}
    >
      <EngageFunnel questions={questions} feedbackMessage={feedbackMessage} />
    </div>
  );
}