  var m = -Infinity, i = 0, n = a.length;

      for (; i <= n; ++i) {
          if (a[i] > m) {
              m = a[i];
          }
      }
      return m;
}
document.write(max(a=[1,2,3,4,782487324987,82348093480923889098,878324888927916726,3456543,]));