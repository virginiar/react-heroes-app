import { useSearchParams } from "react-router";

import { useQuery } from "@tanstack/react-query";

import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { CustomBreadcrumb } from "@/components/custom/CustomBreadcrumb";

import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { searchHeroesAction } from "@/heroes/actions/search-heroes.action";
import { HeroGrid } from "@/heroes/components/HeroGrid";

export const SearchPage = () => {
  const [searchParams] = useSearchParams();

  const name = searchParams.get("name") ?? undefined;

  const { data: heroes = [] } = useQuery({
    queryKey: ["search", { name }],
    queryFn: () => searchHeroesAction({ name }),
    staleTime: 1000 * 60 * 5, // 5 minutos
  });

  return (
    <>
      {/* Header */}
      <CustomJumbotron
        title="Búsqueda de SuperHéroes"
        description="Descubre, explora y administra super héroes y villanos"
      />

      <CustomBreadcrumb
        currentPage="Buscador de héroes"
        // breadcrumbs={[
        //   { label: 'Home1', to: '/' },
        //   { label: 'Home2', to: '/' },
        //   { label: 'Home3', to: '/' },
        // ]}
      />

      {/* Stats Dashboard */}
      <HeroStats />

      {/* Filter and search */}
      <SearchControls />

      {/* Resultado de la búsqueda */}
      <HeroGrid heroes={heroes} />
    </>
  );
};

export default SearchPage;
