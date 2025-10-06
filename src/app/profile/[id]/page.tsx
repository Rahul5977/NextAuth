export default function ProfileIdPage({params}:any) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">Profile Details of {params.id}</h1>
      <p className="text-lg text-gray-600">
        This is the profile details page for user {params.id}.
      </p>
    </div>
  );
}
