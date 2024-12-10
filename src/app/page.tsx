import Doenca from '@/components/Doenca/Doenca';
import Endereco from '@/components/Endereco/Endereco';
import Informacoes from '@/components/Informacoes/Informacoes';
import Perfil from '@/components/Perfil/Perfil';

export default function Home() {
  return (
    <>
      <Perfil />
      <Informacoes />
      <Doenca />
      <Endereco />
    </>
  );
}
