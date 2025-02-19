export const LandingMain = () =>{
    return(
        <main className="mt-7">
            <div className="relative flex items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                    <img src="/svg-image-4.svg" alt="svg"/>
                    <h1 className="font-excalifont absolute text-5xl text-[#171570] font-medium">
                        Online
                        <em>
                            <strong className="font-excalifont ml-1 mr-1 bg-[#d3ffd2] p-3 rounded-lg text-6xl">
                                Whiteboard
                            </strong>
                        </em>
                        made simple
                    </h1>
                    <p className="absolute top-1/2 mt-16 text-center text-[#171570] text-xl">
                        Ideate, Collaborate, Share. Simply with Calibur.
                    </p>
                </div>
                <div className="absolute top-80 mt-8">
                    <img src="/tip_of_the_pen.svg" alt="pen" />
                </div>
            </div>
            <div className="relative flex items-center justify-center mt-40">
                <div className="mx-20">
                    <img src="editor_playground.png" alt="playground" />
                </div>
            </div>
        </main>
    );
} 