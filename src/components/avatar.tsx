// https://preline.co/docs/avatar.html#media

export default function Avatar() {
  return (
    <div className="shrink-0 group block">
      <div className="flex items-center">
        <img
          className="inline-block shrink-0 size-[35px] rounded-full"
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
          alt="Avatar"
        />
        <div className="ms-3">
          <h3 className="font-semibold text-gray-800 text-sm">Student 456</h3>
          <p className="text-sm font-medium text-gray-400">456@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
