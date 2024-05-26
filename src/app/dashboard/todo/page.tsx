export default async function Todo() {
  await new Promise((resolve) => {
    setTimeout(resolve, 5000);
  });

  const addTodo = async (formData: FormData) => {
    "use server";
    const todo = formData.get("todoInput");
    console.log(todo);
  };

  return (
    <div className="w-screen h-screen">
      <div className="w-screen h-1/2 flex justify-center items-center">
        <div className="w-80">
          <form action={addTodo}>
            <label htmlFor="todoInput">Write your Todo</label>
            <input
              type="text"
              name="todoInput"
              id="todoInput"
              className="border w-full h-12 rounded-lg px-2 mt-1"
            />
            <div className="w-full h-12 flex justify-center mt-3">
              <button className="border rounded-lg w-16 h-8 text-sm shadow-md hover:bg-black hover:text-white hover:border-none duration-200 hover:scale-110">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
      <div></div>
    </div>
  );
}
