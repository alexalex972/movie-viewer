
const MOVIE_POSTER_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export const getImageUrl = (posterPath: string): string => {
    return `${MOVIE_POSTER_BASE_URL}${posterPath}`;
}