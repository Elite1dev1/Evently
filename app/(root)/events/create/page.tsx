"use client";

import EventForm from "@/components/shared/EventForm";
import { useAuth } from "@clerk/nextjs";
import { useEffect } from "react";

const CreateEvent = () => {
  const { userId } = useAuth();

  useEffect(() => {
    console.log(userId);
  });

  // Add check for undefined userId
  if (!userId) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg">Loading...</p>
      </div>
    );
  }

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">
          Create Event
        </h3>
      </section>

      <div className="wrapper my-8">
        <EventForm userId={userId} type="Create" />
      </div>
    </>
  );
};

export default CreateEvent;
