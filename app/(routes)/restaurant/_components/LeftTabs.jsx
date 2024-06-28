import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MenuTabs from "./MenuTabs";

function LeftTabs({ restaurant }) {
  return (
    <div>
      <Tabs defaultValue="category" className="w-full mt-10">
        <TabsList>
          <TabsTrigger value="category">Category</TabsTrigger>
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>
        <TabsContent value="category">
          <MenuTabs restaurant={restaurant} />
        </TabsContent>
        <TabsContent value="about">About</TabsContent>
        <TabsContent value="reviews">Review</TabsContent>
      </Tabs>
    </div>
  );
}

export default LeftTabs;
