export default function ProfileIdPage({ params }: any) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <h1 className="text-4xl font-bold mb-4 text-white">
        Code{" "}
        <span className="bg-orange-500 text-black px-2 py-1 rounded">
          {params.id}
        </span>
      </h1>
      {/* <p className="text-lg text-white">
        This is the profile details page for user{" "}
        <span className="bg-orange-500 text-black px-2 py-1 rounded">
          {params.id}
        </span>
        .
      </p> */}
    </div>
  );
}
