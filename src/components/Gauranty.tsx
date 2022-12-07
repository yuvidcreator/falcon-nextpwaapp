

const Gauranty = () => {
    return (
        <>
            <div className="mx-auto py-5 px-4 w-full max-w-7xl bg-white">
                <div className="py-8 grid grid-cols-3 lg:grid-cols-4 gap-5 border-t-2 border-b-2 border-red-600">

                    {/* :WEBSITE NAME */}
                    <h2 className="col-span-full lg:col-span-1 inline-flex justify-center items-center text-xl text-gray-700 font-bold">
                        Only @FalconCouries, Pimpri
                    </h2>

                    {/* :FREE SHIPPING */}
                    <div className="col-span-full md:col-span-1 flex flex-col md:flex-row justify-center items-center">
                        {/* ::Picture */}
                        <div className="w-1/3 py-2 inline-flex justify-center items-center rounded-md bg-indigo-100">
                            <svg className="h-10 text-red-600 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fillRule="evenodd" clipRule="evenodd"><path d="M5 18h-1c-.552 0-1-.448-1-1v-2h12v-9h4.667c1.117 0 1.6.576 1.936 1.107.594.94 1.536 2.432 2.109 3.378.188.312.288.67.288 1.035v4.48c0 1.121-.728 2-2 2h-1c0 1.656-1.344 3-3 3s-3-1.344-3-3h-4c0 1.656-1.344 3-3 3s-3-1.344-3-3zm3-1.2c.662 0 1.2.538 1.2 1.2 0 .662-.538 1.2-1.2 1.2-.662 0-1.2-.538-1.2-1.2 0-.662.538-1.2 1.2-1.2zm10 0c.662 0 1.2.538 1.2 1.2 0 .662-.538 1.2-1.2 1.2-.662 0-1.2-.538-1.2-1.2 0-.662.538-1.2 1.2-1.2zm-10-8.8h-8v-2h8v-1h-5v-1c0-.552.448-1 1-1h9c.552 0 1 .448 1 1v10h-11v-3h-2v-2h7v-1zm9 0v3h4.715l-1.427-2.496c-.178-.312-.509-.504-.868-.504h-2.42z"/></svg>
                        </div>
                        {/* ::Infos */}
                        <p className="md:ml-3 flex flex-col text-center md:text-left text-gray-700">
                            <span className="text-sm font-bold">FREE SHIPPING</span>
                            <span className="text-sm font-semibold">(on orders over Rs.800)</span>
                        </p>
                    </div>

                    {/* :FREE SAMPLES */}
                    <div className="col-span-full md:col-span-1 flex flex-col md:flex-row justify-center items-center">
                        {/* ::Picture */}
                        <div className="w-1/3 py-2 inline-flex justify-center items-center rounded-md bg-indigo-100">
                            <svg className="h-10 text-red-600 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fillRule="evenodd" clipRule="evenodd"><path d="M7 16.462l1.526-.723c1.792-.81 2.851-.344 4.349.232 1.716.661 2.365.883 3.077 1.164 1.278.506.688 2.177-.592 1.838-.778-.206-2.812-.795-3.38-.931-.64-.154-.93.602-.323.818 1.106.393 2.663.79 3.494 1.007.831.218 1.295-.145 1.881-.611.906-.72 2.968-2.909 2.968-2.909.842-.799 1.991-.135 1.991.72 0 .23-.083.474-.276.707-2.328 2.793-3.06 3.642-4.568 5.226-.623.655-1.342.974-2.204.974-.442 0-.922-.084-1.443-.25-1.825-.581-4.172-1.313-6.5-1.6v-5.662zm-1 6.538h-4v-8h4v8zm15-11.497l-6.5 3.468v-7.215l6.5-3.345v7.092zm-7.5-3.771v7.216l-6.458-3.445v-7.133l6.458 3.362zm-3.408-5.589l6.526 3.398-2.596 1.336-6.451-3.359 2.521-1.375zm10.381 1.415l-2.766 1.423-6.558-3.415 2.872-1.566 6.452 3.558z"/></svg>
                        </div>
                        {/* ::Infos */}
                        <p className="md:ml-3 flex flex-col text-center md:text-left text-gray-700">
                            <span className="text-sm font-bold">ALL OVER INDIA</span>
                            <span className="text-sm font-semibold">(Yes, please!)</span>
                        </p>
                    </div>

                    {/* :SURPRISES */}
                    <div className="col-span-full md:col-span-1 flex flex-col md:flex-row justify-center items-center">
                        {/* ::Picture */}
                        <div className="w-1/3 py-2 inline-flex justify-center items-center rounded-md bg-indigo-100">
                            <svg className="h-10 text-red-600 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fillRule="evenodd" clipRule="evenodd"><path d="M11 24h-9v-12h9v12zm0-18h-11v4h11v-4zm2 18h9v-12h-9v12zm0-18v4h11v-4h-11zm4.369-6c-2.947 0-4.671 3.477-5.369 5h5.345c3.493 0 3.53-5 .024-5zm-.796 3.621h-2.043c.739-1.121 1.439-1.966 2.342-1.966 1.172 0 1.228 1.966-.299 1.966zm-9.918 1.379h5.345c-.698-1.523-2.422-5-5.369-5-3.506 0-3.469 5 .024 5zm.473-3.345c.903 0 1.603.845 2.342 1.966h-2.043c-1.527 0-1.471-1.966-.299-1.966z"/></svg>
                        </div>
                        {/* ::Infos */}
                        <p className="md:ml-3 flex flex-col text-center md:text-left text-gray-700">
                            <span className="text-sm font-bold">SURPRISES</span>
                            <span className="text-sm font-semibold">(You will love. Trust.)</span>
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Gauranty