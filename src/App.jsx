import Button from "./components/Button";
import data from "./test.json"

const App = () => {
  return (
    <>
      <div className="flex w-screen h-screen flex-wrap justify-center">
        {data.map((form, key) => {
          const includes = form.includes;
          return (
            <div key={key} className="w-1/3 flex-col box-border mb-4  border border-gray-200 rounded-md mx-2 shadow-bottom flex justify-between">
            <h1 className="font-medium bg-[#fcf5e9] text-xl w-full self-start h-12 px-4 py-2">{form.service}</h1>

            {includes === null ? (
              <p className="text-gray-500 p-4">{form.description}</p>
            ) : (
              <ul className="p-4">
                {form.includes.map((data, index) => (
                  <>
                  <li className="full text-gray-500">{index + 1}. {data}</li>
                  </>
                ))}
              </ul>
            )}
            <div className="p-4"><Button/></div>
            
          </div>
          )
        })}
      </div>
    </>
  )
}

export default App;
