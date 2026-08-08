"use client";

import { use } from "react";
import PackageForm from "@/components/admin/PackageForm";

export default function EditPackagePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  return <PackageForm mode="edit" packageId={id} />;
}
