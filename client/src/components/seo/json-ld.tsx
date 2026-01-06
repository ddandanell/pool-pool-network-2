import { useEffect } from "react";

interface JsonLdProps {
  data: Record<string, any>;
}

export function JsonLd({ data }: JsonLdProps) {
  useEffect(() => {
    // Create a unique ID for this schema
    const schemaType = data["@type"] || "schema";
    const schemaId = `json-ld-${schemaType}`;
    
    // Check if this schema already exists
    let script = document.getElementById(schemaId) as HTMLScriptElement;
    
    if (!script) {
      // Create new script element
      script = document.createElement("script");
      script.id = schemaId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    
    // Set the JSON-LD content
    script.textContent = JSON.stringify(data);
    
    // Cleanup function to remove the script when component unmounts
    return () => {
      const existingScript = document.getElementById(schemaId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [data]);

  return null;
}
