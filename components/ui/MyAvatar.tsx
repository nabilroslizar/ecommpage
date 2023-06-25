import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import React from "react";

const MyAvatar = () => {
  return (
    <Avatar>
      <AvatarImage src="https://64.media.tumblr.com/861064e8853cf03d52973b7442d147be/tumblr_pi3gynQMp91xwdj8mo2_250.pnj" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export default MyAvatar;
