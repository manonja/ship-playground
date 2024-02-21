import { useCurrentUser } from "src/features/users/hooks/useCurrentUser";
import { useMutation } from "@blitzjs/rpc";
import logout from "src/features/auth/mutations/logout";
import { FC } from "react";

export const UserInfo: FC = () => {
  const currentUser = useCurrentUser();
  const [logoutMutation] = useMutation(logout);

  if (!currentUser) return null;

  return (
    <>
      <button
        onClick={async () => {
          await logoutMutation();
        }}
      >
        Logout
      </button>
      <div>
        User id: <code>{currentUser.id}</code>
        <br />
        User role: <code>{currentUser.role}</code>
      </div>
    </>
  );
};
