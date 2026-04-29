import { useState } from "react";
import threeFingers from "../../assets/gestures/three-fingers.jpg";
import Fingers from "../../assets/gestures/fingers.jpg";
import oneFinger from "../../assets/gestures/one-finger.jpg";
import pinky from "../../assets/gestures/pinky.jpg";

export default function HelpPanel() {
  const [open, setOpen] = useState(false);

  const gestures = [
  {
    img: threeFingers,
    title: "3 Fingers",
    desc: "Send problem to AI"
  },
  {
    img: Fingers,
    title: "Fingers",
    desc: "Stop Drawing"
  },
  {
    img: oneFinger,
    title: "one Finger",
    desc: "Draw"
  },
  {
    img: pinky,
    title: "pinky",
    desc: "Clear Screen"
  }
];

  return (
    <>
      {/* Help Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow"
      >
        Help
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          
          <div className="bg-white w-[600px] max-h-[80vh] overflow-y-auto p-6 rounded-xl shadow-lg">

            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="float-right text-red-500 font-bold"
            >
              ✖
            </button>

            <h2 className="text-xl font-bold mb-4">How to Use</h2>

            {/* Gesture List */}
            <div className="space-y-3">
              {gestures.map((g, i) => (
                <div key={i} className="flex items-center gap-4 border p-2 rounded">
                  <img
                    src={g.img}
                    alt={g.title}
                    className="w-12 h-12 object-contain"
                  />
                  <p>{g.desc}</p>
                </div>
              ))}
            </div>

            {/* Video Placeholder */}
            <div className="mt-6">
              <h3 className="font-semibold mb-2">Demo Video</h3>

              <div className="w-full h-[200px] bg-gray-200 flex items-center justify-center rounded">
                <p className="text-gray-500">Video will be added here</p>
              </div>

            </div>

          </div>
        </div>
      )}
    </>
  );
}