import { Card, Button, Textarea, ScrollShadow } from "@nextui-org/react";
import { cookies } from "next/headers";
import Sidebar from "./components/Sidebar";

async function getInitialMessages() {
  return [
    { role: "assistant", text: "Hello! How can I help you today?" },
    { role: "user", text: "What's the weather today" },
    {
      role: "assistant",
      text: `<div class="relative"><div class="my-2"></div><div class="not-prose flex items-center gap-4"><div class="grow"><div class="text-lg font-semibold">Currently 91° · Cloudy</div><div class="text-token-text-secondary">Noida, India</div></div><div class="flex"><button class="text-token-text-tertiary hover:text-token-text-primary flex items-center justify-center p-1.5" type="button" id="radix-«r69»" aria-haspopup="menu" aria-expanded="false" data-state="closed"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-sm-heavy"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 21C10.8954 21 10 20.1046 10 19C10 17.8954 10.8954 17 12 17C13.1046 17 14 17.8954 14 19C14 20.1046 13.1046 21 12 21ZM12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14ZM12 7C10.8954 7 10 6.10457 10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5C14 6.10457 13.1046 7 12 7Z" fill="currentColor"></path></svg></button><img draggable="false" alt="Cloudy" width="50" height="50" src="https://cdn.oaistatic.com/assets/cloudy-disd26f3.webp"></div></div><div class="no-scrollbar not-prose mt-1 overflow-auto sm:overflow-hidden"><div class="text-token-text-primary overflow-y-auto text-base min-w-0"><table class="w-full border-separate border-spacing-0"><tbody class="border-token-border-medium border-b-[0.5px] [&amp;_tr:last-child]:border-b-0"><tr class=""><td class="border-token-border-medium border-b-[0.5px] align-top pe-4 last:pe-0 [tr:last-child_&amp;]:border-b-0 text-left border-token-border-xlight! border-s-0! border-e-0! py-2! ps-4! pe-3! first:ps-0! last:pe-0! w-[7.5rem] min-w-[7.5rem]"><div class="flex [tr[data-disabled=true]_&amp;]:opacity-50 items-start leading-relaxed"><img draggable="false" alt="Some sun, then increasing clouds" width="30" height="30" src="https://cdn.oaistatic.com/assets/sun-mostly-cloudy-e3pqqgs7.webp"><div class="ms-3 whitespace-nowrap">Today</div></div></td><td class="border-token-border-medium border-b-[0.5px] align-top pe-4 last:pe-0 [tr:last-child_&amp;]:border-b-0 text-left border-token-border-xlight! border-s-0! border-e-0! py-2! ps-4! pe-3! first:ps-0! last:pe-0! tabular-nums"><div class="flex [tr[data-disabled=true]_&amp;]:opacity-50 items-start leading-relaxed"><div>100°</div><div class="text-token-text-secondary ms-1">82°</div></div></td><td class="border-token-border-medium border-b-[0.5px] align-top pe-4 last:pe-0 [tr:last-child_&amp;]:border-b-0 text-left border-token-border-xlight! border-s-0! border-e-0! py-2! ps-4! pe-3! first:ps-0! last:pe-0! min-w-80"><div class="flex [tr[data-disabled=true]_&amp;]:opacity-50 items-start leading-relaxed">Some sun, then increasing clouds</div></td></tr><tr class=""><td class="border-token-border-medium border-b-[0.5px] align-top pe-4 last:pe-0 [tr:last-child_&amp;]:border-b-0 text-left border-token-border-xlight! border-s-0! border-e-0! py-2! ps-4! pe-3! first:ps-0! last:pe-0! w-[7.5rem] min-w-[7.5rem]"><div class="flex [tr[data-disabled=true]_&amp;]:opacity-50 items-start leading-relaxed"><img draggable="false" alt="Times of sun and clouds" width="30" height="30" src="https://cdn.oaistatic.com/assets/sun-mostly-cloudy-e3pqqgs7.webp"><div class="ms-3 whitespace-nowrap">Monday</div></div></td><td class="border-token-border-medium border-b-[0.5px] align-top pe-4 last:pe-0 [tr:last-child_&amp;]:border-b-0 text-left border-token-border-xlight! border-s-0! border-e-0! py-2! ps-4! pe-3! first:ps-0! last:pe-0! tabular-nums"><div class="flex [tr[data-disabled=true]_&amp;]:opacity-50 items-start leading-relaxed"><div>96°</div><div class="text-token-text-secondary ms-1">79°</div></div></td><td class="border-token-border-medium border-b-[0.5px] align-top pe-4 last:pe-0 [tr:last-child_&amp;]:border-b-0 text-left border-token-border-xlight! border-s-0! border-e-0! py-2! ps-4! pe-3! first:ps-0! last:pe-0! min-w-80"><div class="flex [tr[data-disabled=true]_&amp;]:opacity-50 items-start leading-relaxed">Times of sun and clouds</div></td></tr><tr class=""><td class="border-token-border-medium border-b-[0.5px] align-top pe-4 last:pe-0 [tr:last-child_&amp;]:border-b-0 text-left border-token-border-xlight! border-s-0! border-e-0! py-2! ps-4! pe-3! first:ps-0! last:pe-0! w-[7.5rem] min-w-[7.5rem]"><div class="flex [tr[data-disabled=true]_&amp;]:opacity-50 items-start leading-relaxed"><img draggable="false" alt="A blend of sun and clouds" width="30" height="30" src="https://cdn.oaistatic.com/assets/sun-mostly-cloudy-e3pqqgs7.webp"><div class="ms-3 whitespace-nowrap">Tuesday</div></div></td><td class="border-token-border-medium border-b-[0.5px] align-top pe-4 last:pe-0 [tr:last-child_&amp;]:border-b-0 text-left border-token-border-xlight! border-s-0! border-e-0! py-2! ps-4! pe-3! first:ps-0! last:pe-0! tabular-nums"><div class="flex [tr[data-disabled=true]_&amp;]:opacity-50 items-start leading-relaxed"><div>96°</div><div class="text-token-text-secondary ms-1">79°</div></div></td><td class="border-token-border-medium border-b-[0.5px] align-top pe-4 last:pe-0 [tr:last-child_&amp;]:border-b-0 text-left border-token-border-xlight! border-s-0! border-e-0! py-2! ps-4! pe-3! first:ps-0! last:pe-0! min-w-80"><div class="flex [tr[data-disabled=true]_&amp;]:opacity-50 items-start leading-relaxed">A blend of sun and clouds</div></td></tr><tr class=""><td class="border-token-border-medium border-b-[0.5px] align-top pe-4 last:pe-0 [tr:last-child_&amp;]:border-b-0 text-left border-token-border-xlight! border-s-0! border-e-0! py-2! ps-4! pe-3! first:ps-0! last:pe-0! w-[7.5rem] min-w-[7.5rem]"><div class="flex [tr[data-disabled=true]_&amp;]:opacity-50 items-start leading-relaxed"><img draggable="false" alt="Widely separated morning thunderstorms; otherwise, partly sunny" width="30" height="30" src="https://cdn.oaistatic.com/assets/sun-mostly-sunny-o99k1c7a.webp"><div class="ms-3 whitespace-nowrap">Wednesday</div></div></td><td class="border-token-border-medium border-b-[0.5px] align-top pe-4 last:pe-0 [tr:last-child_&amp;]:border-b-0 text-left border-token-border-xlight! border-s-0! border-e-0! py-2! ps-4! pe-3! first:ps-0! last:pe-0! tabular-nums"><div class="flex [tr[data-disabled=true]_&amp;]:opacity-50 items-start leading-relaxed"><div>95°</div><div class="text-token-text-secondary ms-1">78°</div></div></td><td class="border-token-border-medium border-b-[0.5px] align-top pe-4 last:pe-0 [tr:last-child_&amp;]:border-b-0 text-left border-token-border-xlight! border-s-0! border-e-0! py-2! ps-4! pe-3! first:ps-0! last:pe-0! min-w-80"><div class="flex [tr[data-disabled=true]_&amp;]:opacity-50 items-start leading-relaxed">Widely separated morning thunderstorms; otherwise, partly sunny</div></td></tr><tr class=""><td class="border-token-border-medium border-b-[0.5px] align-top pe-4 last:pe-0 [tr:last-child_&amp;]:border-b-0 text-left border-token-border-xlight! border-s-0! border-e-0! py-2! ps-4! pe-3! first:ps-0! last:pe-0! w-[7.5rem] min-w-[7.5rem]"><div class="flex [tr[data-disabled=true]_&amp;]:opacity-50 items-start leading-relaxed"><img draggable="false" alt="Mostly sunny" width="30" height="30" src="https://cdn.oaistatic.com/assets/sun-mostly-sunny-o99k1c7a.webp"><div class="ms-3 whitespace-nowrap">Thursday</div></div></td><td class="border-token-border-medium border-b-[0.5px] align-top pe-4 last:pe-0 [tr:last-child_&amp;]:border-b-0 text-left border-token-border-xlight! border-s-0! border-e-0! py-2! ps-4! pe-3! first:ps-0! last:pe-0! tabular-nums"><div class="flex [tr[data-disabled=true]_&amp;]:opacity-50 items-start leading-relaxed"><div>97°</div><div class="text-token-text-secondary ms-1">80°</div></div></td><td class="border-token-border-medium border-b-[0.5px] align-top pe-4 last:pe-0 [tr:last-child_&amp;]:border-b-0 text-left border-token-border-xlight! border-s-0! border-e-0! py-2! ps-4! pe-3! first:ps-0! last:pe-0! min-w-80"><div class="flex [tr[data-disabled=true]_&amp;]:opacity-50 items-start leading-relaxed">Mostly sunny</div></td></tr><tr class=""><td class="border-token-border-medium border-b-[0.5px] align-top pe-4 last:pe-0 [tr:last-child_&amp;]:border-b-0 text-left border-token-border-xlight! border-s-0! border-e-0! py-2! ps-4! pe-3! first:ps-0! last:pe-0! w-[7.5rem] min-w-[7.5rem]"><div class="flex [tr[data-disabled=true]_&amp;]:opacity-50 items-start leading-relaxed"><img draggable="false" alt="Sunny" width="30" height="30" src="https://cdn.oaistatic.com/assets/sun-sunny-kqjpjzd8.webp"><div class="ms-3 whitespace-nowrap">Friday</div></div></td><td class="border-token-border-medium border-b-[0.5px] align-top pe-4 last:pe-0 [tr:last-child_&amp;]:border-b-0 text-left border-token-border-xlight! border-s-0! border-e-0! py-2! ps-4! pe-3! first:ps-0! last:pe-0! tabular-nums"><div class="flex [tr[data-disabled=true]_&amp;]:opacity-50 items-start leading-relaxed"><div>103°</div><div class="text-token-text-secondary ms-1">85°</div></div></td><td class="border-token-border-medium border-b-[0.5px] align-top pe-4 last:pe-0 [tr:last-child_&amp;]:border-b-0 text-left border-token-border-xlight! border-s-0! border-e-0! py-2! ps-4! pe-3! first:ps-0! last:pe-0! min-w-80"><div class="flex [tr[data-disabled=true]_&amp;]:opacity-50 items-start leading-relaxed">Sunny</div></td></tr><tr class=""><td class="border-token-border-medium border-b-[0.5px] align-top pe-4 last:pe-0 [tr:last-child_&amp;]:border-b-0 text-left border-token-border-xlight! border-s-0! border-e-0! py-2! ps-4! pe-3! first:ps-0! last:pe-0! w-[7.5rem] min-w-[7.5rem]"><div class="flex [tr[data-disabled=true]_&amp;]:opacity-50 items-start leading-relaxed"><img draggable="false" alt="Very warm with plenty of sunshine" width="30" height="30" src="https://cdn.oaistatic.com/assets/sun-sunny-kqjpjzd8.webp"><div class="ms-3 whitespace-nowrap">Saturday</div></div></td><td class="border-token-border-medium border-b-[0.5px] align-top pe-4 last:pe-0 [tr:last-child_&amp;]:border-b-0 text-left border-token-border-xlight! border-s-0! border-e-0! py-2! ps-4! pe-3! first:ps-0! last:pe-0! tabular-nums"><div class="flex [tr[data-disabled=true]_&amp;]:opacity-50 items-start leading-relaxed"><div>107°</div><div class="text-token-text-secondary ms-1">86°</div></div></td><td class="border-token-border-medium border-b-[0.5px] align-top pe-4 last:pe-0 [tr:last-child_&amp;]:border-b-0 text-left border-token-border-xlight! border-s-0! border-e-0! py-2! ps-4! pe-3! first:ps-0! last:pe-0! min-w-80"><div class="flex [tr[data-disabled=true]_&amp;]:opacity-50 items-start leading-relaxed">Very warm with plenty of sunshine</div></td></tr></tbody></table></div></div></div>`,
    },
    { role: "assistant", text: "Please note that on the evening of June 1, 2025, Noida and the surrounding Delhi-NCR region experienced heavy rains and strong winds, providing relief from the heat but also causing disruptions." },
  ];
}

export default async function Home() {
  const collapsed =
    (await cookies()).get("sidebar-collapsed")?.value === "true";
  const messages = await getInitialMessages();

  return (
    <div className="flex h-screen">
      <Sidebar defaultCollapsed={collapsed} />

      <div className="flex-col bg-gray-40 p-4 w-1/2 [--thread-content-max-width:52rem] @[34rem]:[--thread-content-max-width:40rem] @[64rem]:[--thread-content-max-width:48rem] mx-auto flex max-w-(--thread-content-max-width) flex-1 text-base gap-4 md:gap-5 lg:gap-6 group/turn-messages focus-visible:outline-hidden">
        <ScrollShadow className="flex-1 overflow-y-auto space-y-4 p-2 flex flex-col">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`max-w-xl ${
                msg.role === "user" ? "self-end text-right" : "self-start"
              }`}
            >
              <Card
                className={`p-3 rounded-2xl ${
                  msg.role === "user" ? "relative bg-token-message-surface rounded-3xl px-5 py-2.5" : ""
                }`}
              >
                 <div
                 className={`rounded-2xl ${
                  msg.role === "user" ? "bg-gray-600 p-2.5" : ""
                }`}
                    dangerouslySetInnerHTML={{
                      __html: `${msg.text}`
                    }}
                  />
              </Card>
            </div>
          ))}
        </ScrollShadow>

        <form className="flex gap-2 mt-4 items-center">
          <Textarea
            className="w-full text-gray-50 block bg-gray-700 resize-none rounded-2xl p-2.5"
            placeholder="Ask anything"
            variant="bordered"
          />
          <Button color="primary" className="bg-white p-2 w-10 h-10 rounded-full" type="submit">
            <svg
              className="w-6 h-6 text-gray-800 dark:text-black"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v13m0-13 4 4m-4-4-4 4"
              />
            </svg>
          </Button>
        </form>
      </div>
    </div>
  );
}
