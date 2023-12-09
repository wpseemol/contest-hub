const ContestBrand = () => {
    const imgUrl = [
        'https://i.ibb.co/z2YZhTY/group-4.png',
        'https://i.ibb.co/RP75wWc/group-4-copy.png',
        'https://i.ibb.co/WPZzspQ/group-14-copy.png',
        'https://i.ibb.co/ZgB9P1F/group-14.png',
        'https://i.ibb.co/st9D8Bd/group-8-copy-3.png',
        'https://i.ibb.co/TTyJ7F3/group-8-copy-2.png',
        'https://i.ibb.co/TTyJ7F3/group-8-copy-2.png',
    ];
    return (
        <>
            <figure className="absolute hover:shadow-2xl hover:scale-110 duration-200  bottom-[6rem] right-[7rem] ">
                <img src={imgUrl[0]} alt="brandImage 1" />
            </figure>
            <figure className="absolute hover:shadow-2xl hover:scale-110 duration-200 top-[8rem] left-16">
                <img src={imgUrl[1]} alt="brandImage 2" />
            </figure>
            <figure className="absolute hover:shadow-2xl hover:scale-110 duration-200 top-[1rem] right-36">
                <img src={imgUrl[1]} alt="brandImage 3" />
            </figure>
            <figure className="absolute hover:shadow-2xl hover:scale-110 duration-200 top-[12rem] left-7">
                <img src={imgUrl[2]} alt="brandImage 4" />
            </figure>
            <figure className="absolute hover:shadow-2xl hover:scale-110 duration-200 top-[16rem] left-[7rem]">
                <img src={imgUrl[3]} alt="brandImage 5" />
            </figure>
            <figure className="absolute hover:shadow-2xl hover:scale-110 duration-200 top-[6rem] right-[5rem]">
                <img src={imgUrl[4]} alt="brandImage 6" />
            </figure>
            <figure className="absolute hover:shadow-2xl hover:scale-110 duration-200 top-10 left-7">
                <img src={imgUrl[5]} alt="brandImage 7" />
            </figure>
            <figure className="absolute hover:shadow-2xl hover:scale-y-110 duration-200 bottom-[1rem] right-[8rem]">
                <img src={imgUrl[6]} alt="brandImage 8" />
            </figure>
        </>
    );
};

export default ContestBrand;
