export function PreLoadImgDetail ({data, data2}) {
    return(
        <>
            {Object.values(data).map((imagesArray,i) => (
                <link key={i} rel="preload" href={imagesArray[i]} as="image" />
            ))}
            {Object.values(data2).map((imagesArray,i) => (
                <link key={i} rel="preload" href={imagesArray[i]} as="image" />
            ))}
        </>
    )
}