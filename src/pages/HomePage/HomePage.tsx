import { Helmet } from 'react-helmet-async';
import { HematoRunMainTitle } from '../../components/HematoRunMainTitle/HematoRunMainTitle';

export default function HomePage() {
  return (
    <div>
      <Helmet>
        <title>Haemato-run</title>
      </Helmet>
      <HematoRunMainTitle />
    </div>
  );
}
