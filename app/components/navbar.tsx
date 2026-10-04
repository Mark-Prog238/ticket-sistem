import {HoverCard, HoverCardContent, HoverCardTrigger} from "@/components/ui/hover-card";
import {Card} from "@/components/ui/card";
import {Avatar, AvatarFallback} from "@/components/ui/avatar";
import {Label} from "@/components/ui/label";

export const Navbar = () => {
    return (
    <div className="min-w-screen ">
        <Card className="w-full items-center justify-center flex-row px-4">
            <div className="w-1/3 flex items-center">
               <Label className="w-full justify-start text-xs font-bold whitespace-nowrap ">
                    Butan Plin Support
               </Label>
            </div>
            <div className="flex flex-1 items-center justify-evenly gap-3">

                <HoverCard>
                    <HoverCardTrigger  className="text-xs whitespace-nowrap ">Home</HoverCardTrigger>
                    <HoverCardContent>
                        Butan Plin Home page.
                    </HoverCardContent>
                </HoverCard>
                <HoverCard>
                    <HoverCardTrigger className="text-xs whitespace-nowrap ">Tickets</HoverCardTrigger>
                    <HoverCardContent>
                        View your tickets.
                    </HoverCardContent>
                </HoverCard>
                <HoverCard>
                    <HoverCardTrigger className="text-xs whitespace-nowrap ">FAQs</HoverCardTrigger>
                    <HoverCardContent>
                        View frequently asked questions.
                    </HoverCardContent>
                </HoverCard>
            </div>
            <div className="flex shrink-0 items-center">
                <HoverCard>
                         <Avatar>
                             <AvatarFallback>
                                 MS
                             </AvatarFallback>
                         </Avatar>
                </HoverCard>
            </div>
        </Card>
        </div>

    )
}