"use client";
export default function SectionTittle({ tittle1, tittle2 }: any) {
  return (
    <div className="mt-8 md:mt-10  ">
      <h2 className="text-mix text-xl md:text-4xl font-semibold mb-2 flex gap-3 ">
        <span className="text-mix-2">{tittle1}</span> {tittle2}
      </h2>
    </div>
  );
}
