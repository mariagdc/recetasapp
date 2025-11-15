import { createContext, useContext, useEffect, useState } from "react";

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xmlenkhyaoulyeuhccog.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhtbGVua2h5YW91bHlldWhjY29nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMxNjMxMzEsImV4cCI6MjA3ODczOTEzMX0.kPZmzST6U3t06U5zGbiv-2sbpjQ8NFxzujSq3yTCNHo'
const supabase = createClient(supabaseUrl, supabaseKey)

const RecetasContext = createContext(null);



export const RecetasProvider = ({ children }) => {
  const [recetas, setRecetas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //fetch('/src/data/recetas.json')
    supabase.from('recetas')
    .select()
    //.then(response => response.json())
      .then(({data}) => {
        console.log(data)
        setRecetas(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error al cargar recetas:', error);
        setIsLoading(false);
      });
  }, []);

  const getRecetaById = (id) => {
    return recetas.find(receta => receta.id === parseInt(id));
  };

  return (
    <RecetasContext.Provider value={{ recetas, isLoading, getRecetaById }}>
      {children}
    </RecetasContext.Provider>
  );
};

export const useRecetas = () => {
  return useContext(RecetasContext);
};