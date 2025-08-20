"use client";

import { Suspense } from "react";
import FireCalculator from "@/components/fire/FireCalculator";

export default function Page() {
    return (
        <Suspense fallback={null}>
            <FireCalculator />
        </Suspense>
    );
}