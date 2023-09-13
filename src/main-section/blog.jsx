
// import PropTypes from 'prop-types';


const Blog = ({ blog }) => {
    const { title, cover, authorimg, author, date, time, icon, hashtag, mark } = blog;
    return (
        <div className="mb-5 bg-base-100 shadow-xl">
            {/*  blogs cover photo */}
            <img className="p-5" src={cover} alt="" />

            {/* author  */}

            <div className="p-5">
                <div className="flex justify-between mx-3 mt-5">
                    <div className="flex items-center gap-3">
                        <img src={authorimg} alt="" />
                        <div>
                            <h4>{author}</h4>
                            <h4>{date}</h4>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <p>{time}</p>
                        <button> <img src={icon} alt="" /></button>
                    </div>
                </div>


                {/* title */}

                <h1 className="text-5xl mx-3 mt-5 mb-2  font-bold">{title}</h1>
                <p className="mb-5 mx-3">{hashtag}</p>
                <p className="mb-5 mx-3  text-blue-500 underline"><a href="">{mark}</a></p>
            </div>

        </div>
    );
};

// Blog.propTypes ={
//     blog:PropTypes.object.isRequired
// }
export default Blog;