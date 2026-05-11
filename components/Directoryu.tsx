import { Search } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { Button } from "./ui/button";
import { ListFilter } from 'lucide-react';
import { Card } from "./ui/card";
import { heroes } from "@/lib/constants";
import Image from "next/image";

export default function Directory() {
  return (
    <>
    <div className="min-h-screen flex items-center justify-center px-6 py-12">

      <div className="w-full max-w-5xl flex flex-col space-y-8">

        {/* TITLE */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-foreground">
          Directory
        </h1>

        <p className="text-lg text-muted-foreground">
          Explore our collection of historical figures and their stories.
        </p>

        {/* SEARCH + FILTERS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center border-none rounded-lg px-8 py-3 bg-foreground/10">

          {/* SEARCH */}
          <div className="md:col-span-2 ">
            <InputGroup className="w-auto bg-background rounded-none py-5 px-4">
              <InputGroupInput
                placeholder="Search by heroes, era, category..."
                className="text-lg py-6"
              />
              <InputGroupAddon>
                <Search size={20} />
              </InputGroupAddon>
            </InputGroup>
          </div>

          {/* FILTERS */} 
          <div className="grid grid-cols-3 rounded-none gap-4 ">

            <NativeSelect className="bg-background rounded-none">
              <NativeSelectOption value="">All eras</NativeSelectOption >
              <NativeSelectOption value="modern">Modern</NativeSelectOption>
              <NativeSelectOption value="middle">Middle Ages</NativeSelectOption>
              <NativeSelectOption value="ancient">Ancient</NativeSelectOption>
            </NativeSelect>

            <NativeSelect className="bg-background rounded-none">
              <NativeSelectOption value="">All categories</NativeSelectOption>
              <NativeSelectOption value="artist">Artist</NativeSelectOption>
              <NativeSelectOption value="writer">Writer</NativeSelectOption>
              <NativeSelectOption value="historian">Historian</NativeSelectOption>
              <NativeSelectOption value="scientist">Scientist</NativeSelectOption>
            </NativeSelect>
            <Button variant="outline" className="md:w-auto text-secondary hover:text-foreground bg-primary hover:bg-secondary text-lg px-8 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 py-5 px-4">
             <ListFilter className="" />
             Refine
          </Button>
          </div>
        </div>
      </div>
    </div>
          <div>
        {heroes.map((hero) => (
          <Card  className="bg-foreground/10 rounded-lg p-6">
            <Image 
            src={hero.image} 
            alt={hero.name} 
            key={hero.name} 
            fill
            className="bg-white p-8 rounded-3xl text-center shadow-2xl" />
            <h2 className="text-2xl font-bold text-secondary">{hero.name}</h2>
            <p className="text-muted-foreground">{hero.description}</p>
          </Card>
        ))}
      </div>
      </>
  );
}