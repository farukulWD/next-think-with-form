import ComplexForm from "@/components/ui/Forms/complex-form/ComplexForm";

export default function Home() {
  return (
    <div className="h-screen w-full">
      <div className="container mx-auto py-4">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold font-poppins">Think with Form</h1>
          <p className="text-muted-foreground font-poppins">
            Think with Form is a form builder that allows you to create forms
            with ease.
          </p>
        </div>
        <div className="mt-4">
          <ComplexForm />
        </div>
      </div>
    </div>
  );
}
