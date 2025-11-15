import { useState, useEffect } from "react";
import { TextField, Button, Paper, Stack } from "@mui/material";
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xmlenkhyaoulyeuhccog.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhtbGVua2h5YW91bHlldWhjY29nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMxNjMxMzEsImV4cCI6MjA3ODczOTEzMX0.kPZmzST6U3t06U5zGbiv-2sbpjQ8NFxzujSq3yTCNHo'
const supabase = createClient(supabaseUrl, supabaseKey)

export default function Comentarios({ idReceta }) {
  const [comentarios, setComentarios] = useState([]);
  const [texto, setTexto] = useState("");

  useEffect(() => {
    supabase.from('comentarios').select().eq('id_receta', idReceta)
      .then(({data}) => setComentarios(data));
  }, []);

  const enviar = async () => {
    supabase.from('comentarios').insert({id_receta: idReceta, comentario: texto}).select().then(d => console.log(d))
    supabase.from('comentarios').select().eq('id_receta', idReceta)
      .then(({data}) => setComentarios(data))
    setTexto("");
  };

  return (
    <Stack spacing={2}>
      <TextField
        label="Escribe un comentario..."
        multiline
        rows={4}
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <Button variant="contained" onClick={enviar}>
        Enviar
      </Button>

      {comentarios.map((c, i) => (
        <Paper key={i} sx={{ p: 2 }}>
          <b>{c.autor}</b>
          <p>{c.comentario}</p>
          <small>{new Date(c.created_at).toLocaleString()}</small>
        </Paper>
      ))}
    </Stack>
  );
}
