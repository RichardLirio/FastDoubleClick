import { CardWithForm } from "@/components/card-with-form";

export default async function Play() {
  return (
    <main className="overflow-hidden">
      <section className="relative">
        <div className="relative py-24 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="text-center sm:mx-auto sm:w-10/12 lg:mr-auto lg:mt-0 lg:w-4/5 flex items-center justify-center">
              <CardWithForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
