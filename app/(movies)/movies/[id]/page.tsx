import { Suspense } from 'react';
import MovieInfo, { getMovie } from '../../../../components/movie-info';
import MovieVideos from '../../../../components/movie-videos';

interface IParams {
  params: { id: string };
}

//동적 페이지를 위한 함수
export async function generateMetadata(props: IParams) {
  const { id } = props.params;

  const movie = await getMovie(id);

  return {
    title: movie.title,
  };
}

export default async function MovieDetailPage(props: IParams) {
  const { id } = props.params;

  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie video</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
