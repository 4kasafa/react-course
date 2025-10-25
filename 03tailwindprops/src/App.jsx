import "./App.css";
import Card from "./components/card";

function App() {
  const users = [
    {
      userName: "Jhon Doe",
      imgUrl: "https://avatar.iran.liara.run/username?username=Jhon+doe",
      role: "Head Staff Engineer",
      city: "New York",
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, eos.",
    },
    {
      userName: "Belle",
      imgUrl: "https://images.pexels.com/photos/774091/pexels-photo-774091.jpeg",
      role: "Student",
      city: "California",
      comment:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias in illo incidunt eveniet dignissimos.",
    },
    {
      userName: "Jane",
      imgUrl: "https://avatar.iran.liara.run/public/girl",
      role: "Worker",
      city: "Alabama",
      comment: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center">
      

      <div className="flex flex-col gap-3 w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-white bg-blue-500 px-6 py-3 rounded-md shadow-md">
          Vite + React + Tailwind
        </h1>

        {users.map((user, index) => (
          <Card
            key={index}
            userName={user.userName}
            img={user.imgUrl}
            city={user.city}
            role={user.role}
            comments={user.comment}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
