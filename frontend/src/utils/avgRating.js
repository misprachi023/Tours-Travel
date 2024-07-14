const calculateAvgRating = reviews => {
    reviews?.reduce((acc, item) => item.rating + acc, 0) 
      totalRating === 0
        ? ""
        : totalRating === 1
        ? totalRating
        : totalRating / reviews?.length;

    return {
        totalRating,
        avgRating
    }
}

export default calculateAvgRating