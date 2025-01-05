import { TForm } from "@/core/models/funnel.model";

export const formMock: TForm = {
  title: "Still Have Questions?",
  descriptiveText: "We're here to help. Fill out the form and we'll get back to you as soon as possible.",
  actionUrl: "/submit-contact-form",
  fields: [
    {
      name: "fullName",
      required: true,
      placeholder: "Full Name",
      type: "text",
      inputType: "input",
    },
    {
      name: "email",
      required: true,
      placeholder: "Email Address",
      type: "email",
      inputType: "input",
    },
    {
      name: "phoneNumber",
      required: false,
      placeholder: "Phone Number",
      type: "text",
      inputType: "input",
    },
    {
      name: "message",
      required: false,
      placeholder: "Your Message",
      type: "text",
      inputType: "textarea",
    },
  ],
  submitButtonLabel: "Submit",
}