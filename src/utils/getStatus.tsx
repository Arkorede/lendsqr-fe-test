import "./../styles/components/_status.scss";

export function getStatus(status: string) {
  switch (status) {
    case "Inactive":
      return (
        <div className="status-inactive">
          <p className="">{status}</p>
        </div>
      );
    case "Pending":
      return (
        <div className="status-pending">
          <p className="">{status}</p>
        </div>
      );
    case "Blacklisted":
      return (
        <div className="status-blacklisted">
          <p className="">{status}</p>
        </div>
      );
    case "Active":
      return (
        <div className="status-active">
          <p className="">{status}</p>
        </div>
      );
    default:
      return status;
  }
}
