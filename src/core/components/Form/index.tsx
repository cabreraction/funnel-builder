// external dependencies
import { Button, Card, Label, TextInput, Textarea } from "flowbite-react";

// internal modules
import { TForm, TFormField } from "@/core/models/funnel.model";

interface DynamicFormProps {
  id: string;
  position: number;
  formConfig: TForm;
}

export function DynamicForm({ 
  id,
  position, 
  formConfig 
}: DynamicFormProps) {
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // const formData = new FormData(e.target);
    /* fetch(formConfig.actionUrl, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) alert("Form submitted successfully!");
        else alert("Submission failed.");
      })
      .catch(() => alert("An error occurred.")); */
  };

  const bg = position % 2 === 0 ? "" : "bg-[#F3F4F6] py-10";

  return (
    <div id={id} className={`px-6 lg:px-10 w-full flex items-center justify-center ${bg}`}>
      <div className="hidden lg:flex flex-col items-center gap-y-4">
        <h2 className="lg:w-[60%] text-center text-xl xl:text-4xl font-bold">{formConfig.title}</h2>
        <p className="lg:w-[70%] text-center">{formConfig.descriptiveText}</p>
      </div>
      <Card className="w-full lg:w-[70%] xl:w-[40%]">
        <h2 className="lg:hidden text-center text-xl font-bold">{formConfig.title}</h2>
        <form 
          onSubmit={handleSubmit} 
          className="gap-y-6 flex flex-wrap justify-between">
          {formConfig.fields.map((field, index) => renderInput(field, index))}
          <div className="flex justify-end w-full">
            <Button type="submit" className="bg-[#E63946] hover:!bg-[#C02636] focus:outline-none focus:ring-0">
              {formConfig.submitButtonLabel || "Submit"}
            </Button>
          </div>
        </form>
      </Card>
    </div>
    
  );
};

export default DynamicForm;

function renderInput(field: TFormField, index: number) {
  switch(field.inputType) {
    case 'input': {
      return (
        <div key={field.name+index} className="flex flex-col gap-2 w-full lg:w-[49%]">
          <Label htmlFor={field.name}>{field.placeholder}</Label>
          <TextInput
            shadow
            id={field.name}
            name={field.name}
            type={field.type}
            required={field.required}
            placeholder={field.placeholder}
          />
        </div>
      );
    }
    case 'textarea': {
      return (
        <div key={field.name+index} className="flex flex-col gap-2 w-full">
          <Label htmlFor={field.name}>{field.placeholder}</Label>
          <Textarea
            id={field.name}
            name={field.name}
            rows={10}
            required={field.required}
            placeholder={field.placeholder}
          />
        </div>
      );
    }
    default: 
      return null;
  }
}
