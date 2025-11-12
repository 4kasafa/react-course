import { useLoaderData } from "react-router-dom";

export default function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState(null);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //             return response.json();
    //         })
    //         .then(data => {
    //             setData(data);
    //             setLoading(false);
    //         })
    //         .catch(error => {
    //             setError(error);
    //             setLoading(false);
    //         });
    // }, []);

    return (
        <div className="py-16 bg-white min-h-screen">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 items-center justify-center">
                    <div className="md:4/12 lg:w-4/12">
                        <img
                            src={data.avatar_url}
                            alt="GitHub Avatar"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            {data.name}
                        </h2>
                        <p className="mt-6 text-gray-600">
                            {data.bio}
                        </p>
                        <p className="mt-4 text-gray-600">
                            Followers: {data.followers}
                        </p>
                        <p className="mt-2 text-gray-600">
                            Following: {data.following}
                        </p>
                        <p className="mt-2 text-gray-600">
                            Public Repos: {data.public_repos}
                        </p>
                        <a 
                            href={data.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-block text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        >
                            View Profile on GitHub
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/4kasafa');
    if (!response.ok) {
        throw new Error('Could not fetch GitHub data');
    }
    return response.json();
}
