import { useState, useEffect } from "react";
import { TextField, Button, Paper, Stack } from "@mui/material";

export default function Comentarios({ idReceta }) {
  const [comentarios, setComentarios] = useState([]);
  const [texto, setTexto] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5173/api/recetas/${idReceta}/comentarios`)
      .then(r => r.json())
      .then(setComentarios);
  }, [idReceta]);

  const enviar = async () => {
    const res = await fetch(`http://localhost:5173/api/recetas/${idReceta}/comentarios`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ texto })
    });

    const nuevo = await res.json();
    setComentarios([...comentarios, nuevo]);
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
          <p>{c.texto}</p>
          <small>{new Date(c.fecha).toLocaleString()}</small>
        </Paper>
      ))}
    </Stack>
  );
}
