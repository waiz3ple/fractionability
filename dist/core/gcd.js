function gcd(a, b) {
    if (b === 0)
        return a;
    return gcd(b, a % b);
}

export { gcd };
//# sourceMappingURL=gcd.js.map
