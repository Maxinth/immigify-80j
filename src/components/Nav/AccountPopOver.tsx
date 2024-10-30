import { Button } from "@chakra-ui/react";
import { AvatarIcon, DownIcon } from "@/assets/icons";
const AccountPopOver = () => {
  return (
    <Button size="lg" variant="outline" className="!m-0 !p-0">
      <AvatarIcon /> <DownIcon />
    </Button>
  );
};

export default AccountPopOver;
