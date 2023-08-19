




const NewProduct = () => {
    
    return (  
        <div className="items-center inline-block  bg-gray-100">
        <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-52 md:h-52">
          <div className="rounded-3xl w-full h-full bg-blue-500 flex items-center justify-center">
            <div className="rounded-3xl w-2/3 h-2/3 bg-yellow-400 flex items-center justify-center">
              {/* Content inside the inner square */}
            </div>
          </div>
          <div className="absolute bottom-0 left-0 p-4">
            <div className="text-lg font-semibold">T-Shirt</div>
            <div className="text-gray-600">$19.99</div>
          </div>
        </div>
      </div>
      );
}
 
export default NewProduct;