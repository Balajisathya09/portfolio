
"use client";

import { useState } from "react";
import { generateProjectDescription } from "@/ai/flows/generate-project-description";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Loader2, Code2 } from "lucide-react";

export default function ProjectLoreTool() {
  const [snippet, setSnippet] = useState("");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    if (!snippet) return;
    setIsLoading(true);
    try {
      const response = await generateProjectDescription({ codeSnippet: snippet });
      setResult(response.description);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="bg-black/50 border-white/5 backdrop-blur-sm overflow-hidden border-2 border-primary/10">
      <CardHeader className="bg-primary/5 pb-4">
        <CardTitle className="flex items-center gap-2 text-primary font-headline">
          <Sparkles className="w-5 h-5" />
          Project Lore AI
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6 space-y-4">
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-white/40 flex items-center gap-2">
            <Code2 className="w-3 h-3" /> Technical Context / Code Snippet
          </label>
          <Textarea
            value={snippet}
            onChange={(e) => setSnippet(e.target.value)}
            placeholder="Paste technical details or a key function here..."
            className="bg-white/5 border-white/10 min-h-[120px] focus:border-primary/50 transition-colors"
          />
        </div>
        
        <Button 
          onClick={handleGenerate} 
          disabled={isLoading || !snippet}
          className="w-full bg-primary hover:bg-primary/90 text-black font-bold"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Manifesting Lore...
            </>
          ) : (
            "Generate Technical Description"
          )}
        </Button>

        {result && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-white/5 rounded-lg border border-white/10"
          >
            <p className="text-sm leading-relaxed text-white/80 whitespace-pre-wrap">
              {result}
            </p>
          </motion.div>
        )}
      </CardContent>
    </Card>
  );
}
