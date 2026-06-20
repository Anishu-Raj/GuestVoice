import { useState } from "react";

import toast from "react-hot-toast";

import {
  Button,
  Input,
  Modal,
  Loader,
  Toast,
} from "../components/ui";

function ComponentsDemo() {

  const [open, setOpen] = useState(false);

  return (
    <div className="p-8 max-w-3xl mx-auto">

      <Toast />

      <h1 className="text-4xl font-bold mb-8">
        GuestVoice UI Library
      </h1>

      <Input
        label="Email"
        placeholder="Enter Email"
      />

      <div className="flex gap-4 mb-8">

        <Button variant="primary">
          Primary
        </Button>

        <Button variant="secondary">
          Secondary
        </Button>

        <Button variant="outline">
          Outline
        </Button>

      </div>

      <div className="flex gap-4 mb-8">

        <Button
          onClick={() => setOpen(true)}
        >
          Open Modal
        </Button>

        <Button
          variant="secondary"
          onClick={() =>
            toast.success(
              "Review analyzed successfully!"
            )
          }
        >
          Show Toast
        </Button>

      </div>

      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="GuestVoice Review Details"
      >
        <p className="mb-4">
          This modal can display review insights,
          sentiment score, or customer feedback.
        </p>

        <Button
          onClick={() => setOpen(false)}
        >
          Close
        </Button>

      </Modal>

      <h2 className="text-2xl font-semibold mb-4">
        Loader Example
      </h2>

      <Loader />

    </div>
  );
}

export default ComponentsDemo;