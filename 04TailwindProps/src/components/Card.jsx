

function card({userName='player01',role='player',source='https://images.pexels.com/photos/4219639/pexels-photo-4219639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}) {
  return (
    <div className="m-5">
        <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
            <img className="w-24 h-24 rounded-full mx-auto" src={source} alt="" width="384" height="512"/>
            <div className="pt-6 space-y-4">
                <blockquote>
                    <p className="text-lg">
                        “Tailwind CSS is the only framework that I've seen scale
                        on large teams. It’s easy to customize, adapts to any design,
                        and the build size is tiny.”
                    </p>
                </blockquote>
                <figcaption>
                    <div>
                        {userName}
                    </div>
                    <div>
                        {role}
                    </div>
                </figcaption>
            </div>
        </figure>
    </div>
  )
}

export default card