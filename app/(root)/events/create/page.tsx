import EventForm from "@/components/shared/EventForm";
import { auth } from "@clerk/nextjs";

const CreateEvent = () => {
  // Fetch the user's session claims (including userId)
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;


  // Now, let's log the userId to the console for debugging purposes
  console.log("data stored :", userId);

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">Créer un événement</h3>
      </section>

      <div className="wrapper my-8">
        {/* Pass the userId to the EventForm component */}
        <EventForm userId={userId} type="Create" />
      </div>
    </>
  );
};

export default CreateEvent;
