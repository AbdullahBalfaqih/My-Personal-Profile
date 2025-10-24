"use client";

import { useState } from "react";
import { refineContent, type RefineContentOutput } from "@/ai/flows/content-refinement-tool";
import { PERSONAL_INFO } from "@/lib/data";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, Loader2, Lightbulb } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";

const AIRefinementTool = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [content, setContent] = useState(PERSONAL_INFO.summary);
  const [result, setResult] = useState<RefineContentOutput | null>(null);
  const { toast } = useToast();

  const handleRefine = async () => {
    if (!content.trim()) {
        toast({
            title: "Content is empty",
            description: "Please enter some text to refine.",
            variant: "destructive",
        });
        return;
    }
    
    setIsLoading(true);
    setResult(null);
    try {
      const output = await refineContent({ content });
      setResult(output);
    } catch (error) {
      console.error("Error refining content:", error);
      toast({
        title: "An error occurred",
        description: "Failed to refine content. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <Button variant="outline" size="lg" onClick={() => setIsOpen(true)}>
        <Sparkles className="mr-2 h-4 w-4" />
        AI Refine Bio
      </Button>
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle>AI-Powered Content Refinement</DialogTitle>
          <DialogDescription>
            Analyze and improve your portfolio content for better tone, clarity, and engagement.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
          <div className="space-y-4">
            <h3 className="font-semibold">Original Content</h3>
            <Textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={15}
              placeholder="Enter your content here..."
            />
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold">AI Suggestions</h3>
             {isLoading ? (
              <div className="flex items-center justify-center h-full rounded-md border border-dashed">
                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
              </div>
            ) : result ? (
              <div className="space-y-4">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg">Refined Content</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">{result.refinedContent}</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                            <Lightbulb className="h-5 w-5 text-accent"/>
                            Improvement Suggestions
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                            {result.suggestions.map((suggestion, i) => (
                                <li key={i}>{suggestion}</li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
              </div>
            ) : (
                <div className="flex flex-col items-center justify-center h-full text-center rounded-md border border-dashed p-8">
                    <Sparkles className="h-8 w-8 text-muted-foreground" />
                    <p className="mt-2 text-sm text-muted-foreground">Refined content and suggestions will appear here.</p>
                </div>
            )}
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleRefine} disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Refining...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-4 w-4" />
                Refine Content
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AIRefinementTool;
