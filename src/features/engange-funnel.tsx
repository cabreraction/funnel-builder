// external dependencies
import OpenAI from "openai";
import { Button } from "flowbite-react";
import { useState, useEffect } from "react";

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

// internal modules
import { Navbar } from "@/core/components/Navbar";
import CardButton from "@/core/components/CardButton";

export interface IEngageFunnelProps {
  questions: {
    audioUrl: string;
    answers: string[];
    questionContent: string;
  }[];
  feedbackMessage: string;
}

const openai = new OpenAI({
  dangerouslyAllowBrowser: true,
  apiKey: process.env.NEXT_PUBLIC_GPT_API_KEY
});

const getClosestAnswer = async (input: string, questions: any, currentQuestion: any) => {
  const question = questions[currentQuestion];
  const prompt = `Match the following input to the closest answer from the list: ${question.answers.join(', ')}. Input: ${input}, respond only with the answer.`;
  
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
            role: "user",
            content: prompt
        },
      ],
      max_tokens: 50,
      temperature: 0.7,
    });
    const match = response.choices[0].message?.content?.trim() || '';
    const answer = question.answers.find((answer: any) => answer.toLowerCase() === match.toLowerCase());
    return answer;
  } catch (e) {
    console.error('Error:', e);
  }
};

export function EngageFunnel({questions, feedbackMessage}: IEngageFunnelProps) {
  const [firstLoad, setFirstLoad] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [isRequestInProgress, setIsRequestInProgress] = useState(false);

  useEffect(() => {
    if (firstLoad) return;
    if (currentQuestion === questions.length) {
      const audio = new Audio(feedbackMessage);
      audio.play();
      const responses = selectedAnswers.join(', ');
      alert(`Thank you for participating! Your responses: ${responses}`);
      return;
    }
    const {audioUrl} = questions[currentQuestion];
    const audio = new Audio(audioUrl);
    audio.play();
    audio.addEventListener('ended', () => {
      console.log('Audio has finished playing');
      startRecognition();
    });
  }, [currentQuestion, firstLoad]);

  const selectAnswer = (answer: string) => {
    setCurrentQuestion(prev => prev + 1);
    setSelectedAnswers(prev => {
      const storedAnswers = [...prev];
      prev.push(answer);
      return storedAnswers;
    }); 
  }

  const startRecognition = () => {
    if (isRequestInProgress) return; // Prevent multiple requests
    setIsRequestInProgress(true);

    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = async (event: any) => {
      const speechResult = event.results[0][0].transcript.toLowerCase();
      console.log('Speech result:', speechResult);  
      const answer = await getClosestAnswer(speechResult, questions, currentQuestion);
      if (answer) {
        selectAnswer(answer);
      } else {
        alert('Answer not recognized. Please try again.');
      }
      setIsRequestInProgress(false); 
    };

    recognition.onerror = (event: any) => {
      console.error('Speech recognition error', event.error);
      setIsRequestInProgress(false); 
    };

    recognition.start();
  };

  const restart = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setFirstLoad(true);
  }

  if (firstLoad) {
    return <div className="h-screen w-full relative">
      <Navbar brand={'Engage'} components={[]} />
      <div className="w-full h-full flex flex-col gap-y-6 justify-center items-center">
      <h2 className="text-4xl">Get Started!</h2>
        <Button outline gradientDuoTone='greenToBlue' onClick={() => setFirstLoad(false)}>click me to get started</Button>
      </div>
    </div>;
  }

  if (currentQuestion === questions.length) {
    return <div className="h-screen w-full relative">
      <Navbar brand={'Engage'} components={[]} />
      <div className="w-full h-full flex flex-col gap-y-6 justify-center items-center">
        <h2 className="text-4xl">Thank you for participating!</h2>
        <Button outline gradientDuoTone='redToYellow' onClick={restart}>try again</Button>
      </div>
    </div>;
  }

  const {questionContent, answers} = questions[currentQuestion];
  
  return (
    <div className="h-screen w-full relative">
      <Navbar brand={'Engage'} components={[]} />
      <div className="w-full h-full flex flex-col gap-y-6 justify-center items-center">
        <h2 className="text-3xl">{questionContent}</h2>
        <div className="flex gap-x-6">
          {
            answers.map((answer, index) => (
              <CardButton key={index} content={answer} index={index} handleClick={selectAnswer} />
            ))
          }
        </div>
      </div>
    </div>
  );
}
