  function max(m) {
    var m = -Infinity, i = 0, n = a.length;

        for (; i <= n; ++i) {
            if (a[i] > m) {
                m = a[i];
            }
        }
        return m;
}
document.write(max(a=[3, 4, 1, 9, 2]));
