// Function to generate permutations of
// at most X elements from array arr[]
    function differentFlagPermutations(X, arr)
    {
      let ml = [];
      ml = arr;
      for(let i = 0; i < ml.length; i++)
      {
        document.write(ml[i] + " ");
      }
 
      let count = ml.length;
 
      // Traverse all possible lengths
      for(let z = 0; z < X - 1; z++)
      {
 
        // Stores all combinations
        // of length z
        let tmp = [];
 
        // Traverse the array
        for(let i = 0; i < arr.length; i++)
        {
          for(let k = 0; k < ml.length; k++)
          {
            if (arr[i] != ml[k])
            {
 
              // Generate all
              // combinations of length z
              tmp.push(ml[k] + arr[i]);
              count += 1;
            }
          }
        }   
 
        // Print all combinations of length z
        for(let i = 0; i < tmp.length; i++)
        {
          document.write(tmp[i] + " ");
        }
 
        // Replace all combinations of length z - 1
        // with all combinations of length z
        ml = tmp;
      }
    }
     
    // Given array
    let arr = [ "a", "b", "c",'d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','10','!','@','#','$','%','^','&','*','(',')','-','=','_','+','[',']','{','}',';','|',':','.',',','?'];
  
    // Given X
    let X = 2;
  
    differentFlagPermutations(X, arr);
