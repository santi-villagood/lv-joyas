/* ============================================================
   CONFIGURACIÓN DE LA TIENDA
   Es el único archivo que tenés que editar para personalizarla.
   ============================================================ */
window.CONFIG = {
  NOMBRE: "Joyas de Plata",          // nombre que aparece en la app
  LOGO_URL: "",                      // opcional: ej. "logo.png" (subilo al repositorio)

  // Supabase → Project Settings → API
  SUPABASE_URL: "",                  // ej. "https://abcdxyz.supabase.co"
  SUPABASE_KEY: "",                  // clave "anon public" (es segura de dejar acá)

  // Número para recibir pedidos: código de país + área + número, sin + ni espacios
  WHATSAPP: "",                      // ej. "5493515551234"

  // La primera tiene que ser "Todo". Las demás las podés cambiar.
  CATEGORIAS: ["Todo", "Anillos", "Collares", "Aros", "Pulseras", "Dijes", "Conjuntos"]
};
