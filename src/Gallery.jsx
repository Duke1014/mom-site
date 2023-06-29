import { galleryContent } from "./Content"



function Gallery() {

    let gallery = galleryContent.gallery;

    const galleryList = () => {
        return Object.values(gallery).map((item, index) => (
            <li key={index}>
                <div className="title">
                    {item.title}
                </div>
                <div className="photo">
                    <img src={item.photo} alt={item.title} />
                </div>
                {/* <div className="description">
                    {item.description}
                </div> */}
            </li>
        ));
      };

  return (
    <div>
        <ul>
            {galleryList()}
        </ul>
    </div>
  )
}

export default Gallery