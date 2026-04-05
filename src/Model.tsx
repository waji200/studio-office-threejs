import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props: any) {
  const { nodes, materials } = useGLTF('/1office_studio.glb') as any;
  return (
    <group {...props} dispose={null}>
      <group position={[0, 7.5, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_1.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_2.geometry}
          material={materials['Material.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_3.geometry}
          material={materials['Wood Floor Gray.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_4.geometry}
          material={materials['Pink Marble']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Office_table_&_chair'].geometry}
        material={materials['White leather']}
        position={[3.732, 0.738, -0.625]}
        scale={[1.647, 0.83, 0.83]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Office_Laptop.geometry}
        material={materials['Brushed Space Grey Aluminum']}
        position={[3.806, 1.653, 0.634]}
        scale={[0.291, 0.24, 0.24]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Office_table_Books.geometry}
        material={materials.Paper}
        position={[2.897, 1.653, 0.479]}
        scale={[0.184, 0.184, 0.24]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['L-shaped_Sofa_Set_lounge'].geometry}
        material={materials['Pink Fabric']}
        position={[-1.389, 0.959, 1.148]}
        scale={[2.214, 0.897, 0.897]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lounge_Wood_Floor.geometry}
        material={materials['Wood Floor Light Pine']}
        position={[-1.26, 0.959, -0.33]}
        scale={[2.157, 2.157, 2.048]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Longe_Wooden_Table_candles.geometry}
        material={materials['Candle Wax']}
        position={[-1.713, 0.977, -0.811]}
        scale={[1.17, 1.17, 0.652]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lounge_Side_Silver_Table.geometry}
        material={materials['Silver metal']}
        position={[-3.784, 1.252, 1.746]}
        scale={0.273}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lounge_Silver_Refridgerator.geometry}
        material={materials.Silver}
        position={[-3.845, 0.906, -3.583]}
        scale={[0.513, 0.587, 0.513]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lounge_Black_Floral_Piece.geometry}
        material={materials['Dark Steel']}
        position={[-0.06, 0.906, -3.583]}
        scale={0.235}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ballet_studio_mirror.geometry}
        material={materials.Mirror}
        position={[12.307, 3.5, -1.62]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[1.155, 1.155, 2.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ballet_studio_Silver_Bars.geometry}
        material={materials.Silver}
        position={[7.705, 1.885, -4.085]}
        scale={0.06}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Front_Book_Shelf_room_pool.geometry}
        material={materials['White marble']}
        position={[9.156, 0.937, 6.994]}
        scale={[1.95, 1.783, 3.261]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Front_Book_Shelf_room_pool_stones.geometry}
        material={materials['White marble']}
        position={[9.305, 0.955, 8.099]}
        scale={[0.652, 0.596, 0.652]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Front_Room_Holographic_Book_shelf.geometry}
        material={nodes.Front_Room_Holographic_Book_shelf.material}
        position={[12.297, 2.779, 6.88]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[1.626, 0.889, 2.903]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Closet_Item_Clothing_Racks.geometry}
        material={materials['Transparent blue plastic procedural']}
        position={[-1.53, 5.824, -2.278]}
        scale={1.549}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Closet_Item_Seats.geometry}
        material={materials['Black&white marble']}
        position={[-1.119, 5.823, -2.636]}
        scale={0.818}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Closet_Item_Table.geometry}
        material={materials['White marble.001']}
        position={[0.148, 6.918, 1.23]}
        scale={[1.805, 1.664, 0.704]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Closet_Item_chairs.geometry}
        material={materials.Marble}
        position={[-0.968, 5.823, -0.147]}
        scale={0.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Closet_Item_Office_Laptop001.geometry}
        material={materials['Brushed Space Grey Aluminum']}
        position={[-0.964, 6.919, 0.846]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.212, 0.174, 0.174]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stairs001.geometry}
        material={materials['Black marble']}
        position={[-7.987, -3.814, -0.981]}
        scale={[0.14, 0.342, 0.14]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stairs002.geometry}
        material={nodes.Stairs002.material}
        position={[-7.987, -1.772, -0.981]}
        scale={[0.706, 0.992, 0.706]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stairs003.geometry}
        material={materials['Black marble']}
        position={[-7.987, 0.938, -0.981]}
        scale={[0.14, 0.351, 0.14]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stairs004.geometry}
        material={nodes.Stairs004.material}
        position={[-7.987, 0.938, -0.981]}
        scale={[0.706, 1.77, 0.706]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Closet_Item_Seats001.geometry}
        material={materials['Bright Marble']}
        position={[2.483, 0.94, -2.636]}
        scale={0.818}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stairs_Cover.geometry}
        material={materials.Metal}
        position={[-7.986, -1.772, -0.986]}
        scale={1.733}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Front_Book_Shelf_room_pool001.geometry}
        material={materials['Water Caustics']}
        position={[9.156, 0.937, 6.994]}
        scale={[1.95, 1.783, 3.261]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Longe_Wooden_Table001.geometry}
        material={materials['Furniture wood']}
        position={[-1.713, 0.977, -0.811]}
        scale={[1.17, 1.17, 0.652]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials['Glass.001']}
        position={[0, 7.5, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials['Water Caustics']}
        position={[0, 7.5, 0]}
      />
      <group
        position={[9.197, 1.382, 8.115]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.363, 0.332, 0.363]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaf1003.geometry}
          material={materials['leaf.001']}
          position={[0.156, 2.174, 1.313]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaf1023.geometry}
          material={materials.leaf}
          position={[0.156, 2.174, 1.313]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaf2003.geometry}
          material={materials['Material.001']}
          position={[-1.775, 3.467, 0.79]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaf2011.geometry}
          material={materials['Material.002']}
          position={[-1.775, 3.467, 0.79]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tree2.geometry}
          material={materials['Material.003']}
          position={[-0.448, 0.505, 0.318]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_Leaves.geometry}
        material={materials['tronco normal']}
        position={[11.163, 1.079, 4.337]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.199, 0.182, 0.199]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere010.geometry}
          material={materials.folhas}
          position={[0, 6.433, -1.887]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Front_Book_Shelf_room_Cherry_blossom_trees.geometry}
        material={materials['Wooden floor.003']}
        position={[11.157, 0.937, 4.35]}
        scale={[0.389, 0.355, 0.389]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Front_room_Book_Shelf.geometry}
        material={materials['Pink Marble']}
        position={[5.957, 1.705, 6.665]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.792, 1.241, 4.016]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Procedural_Low_Poly_Rock.geometry}
        material={materials.Rock}
        position={[-9.891, -3.267, 2.797]}
        rotation={[0, -0.602, -0.435]}
        scale={3.26}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Procedural_Low_Poly_Rock001.geometry}
        material={materials.Rock}
        position={[-11.971, -2.947, -0.465]}
        rotation={[-2.998, -0.277, -3.092]}
        scale={4.458}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Procedural_Low_Poly_Rock002.geometry}
        material={materials.Rock}
        position={[-10.584, -2.531, -3.919]}
        rotation={[Math.PI, 0.43, 2.706]}
        scale={4.429}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Procedural_Low_Poly_Rock003.geometry}
        material={materials.Rock}
        position={[-6.956, -2.531, -5.917]}
        rotation={[0, -0.269, -0.435]}
        scale={4.315}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Procedural_Low_Poly_Rock004.geometry}
        material={materials.Rock}
        position={[-7.808, -3.18, 3.656]}
        rotation={[-2.43, 0.85, 1.851]}
        scale={4.091}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Procedural_Low_Poly_Rock005.geometry}
        material={materials.Rock}
        position={[-8.24, -5.771, -1.231]}
        rotation={[-2.161, 0.455, 1.421]}
        scale={4.091}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Procedural_Low_Poly_Rock006.geometry}
        material={materials.Rock}
        position={[-7.533, -5.771, 2.439]}
        rotation={[-2.161, 0.455, 1.421]}
        scale={4.091}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Procedural_Low_Poly_Rock007.geometry}
        material={materials.Rock}
        position={[-11.714, -5.771, -1.505]}
        rotation={[-2.161, 0.455, 1.421]}
        scale={4.091}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Procedural_Low_Poly_Rock008.geometry}
        material={materials.Rock}
        position={[-8.259, -5.771, -4.567]}
        rotation={[-2.161, 0.455, 1.421]}
        scale={4.091}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Procedural_Low_Poly_Rock009.geometry}
        material={materials.Rock}
        position={[-4.805, -6.137, 0.457]}
        rotation={[2.612, 0.953, -2.954]}
        scale={4.091}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Procedural_Low_Poly_Rock010.geometry}
        material={materials.Rock}
        position={[-4.805, -5.496, -2.977]}
        rotation={[2.612, 0.953, -2.954]}
        scale={4.091}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Procedural_Low_Poly_Rock011.geometry}
        material={materials.Rock}
        position={[-1.592, -2.645, -3.66]}
        rotation={[0, -0.269, -0.435]}
        scale={4.315}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Procedural_Low_Poly_Rock013.geometry}
        material={materials.Rock}
        position={[5.36, -3.939, -2.897]}
        rotation={[0, -0.269, -0.435]}
        scale={4.315}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Procedural_Low_Poly_Rock014.geometry}
        material={materials.Rock}
        position={[3.043, -2.531, 3.405]}
        rotation={[0, -0.269, -0.435]}
        scale={4.315}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Procedural_Low_Poly_Rock015.geometry}
        material={materials.Rock}
        position={[9.515, -2.531, -2.021]}
        rotation={[0.11, -0.369, -0.633]}
        scale={4.315}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Procedural_Low_Poly_Rock016.geometry}
        material={materials.Rock}
        position={[10.475, -2.531, -4.141]}
        rotation={[0, -0.269, -0.435]}
        scale={4.315}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Procedural_Low_Poly_Rock017.geometry}
        material={materials.Rock}
        position={[7.508, -2.531, 2.359]}
        rotation={[0, -0.269, -0.435]}
        scale={4.315}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Procedural_Low_Poly_Rock018.geometry}
        material={materials.Rock}
        position={[10.815, -2.531, 2.161]}
        rotation={[0, -0.269, -0.435]}
        scale={4.315}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Procedural_Low_Poly_Rock019.geometry}
        material={materials.Rock}
        position={[6.971, -2.531, 5.355]}
        rotation={[0, -0.269, -0.435]}
        scale={4.315}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Procedural_Low_Poly_Rock020.geometry}
        material={materials.Rock}
        position={[9.345, -2.531, 4.875]}
        rotation={[0, -0.269, -0.435]}
        scale={4.315}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Procedural_Low_Poly_Rock021.geometry}
        material={materials.Rock}
        position={[10.362, -2.531, 6.485]}
        rotation={[0, -0.269, -0.435]}
        scale={4.315}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Procedural_Low_Poly_Rock022.geometry}
        material={materials.Rock}
        position={[6.293, -2.531, 10.612]}
        rotation={[0, -0.269, -0.435]}
        scale={4.315}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Procedural_Low_Poly_Rock023.geometry}
        material={materials.Rock}
        position={[12.397, -2.531, 7.559]}
        rotation={[0, -0.269, -0.435]}
        scale={4.315}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Procedural_Low_Poly_Rock024.geometry}
        material={materials.Rock}
        position={[10.673, -2.248, 10.696]}
        rotation={[-0.179, -0.201, -1.171]}
        scale={4.315}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Procedural_Low_Poly_Rock025.geometry}
        material={materials.Rock}
        position={[8.949, -2.531, 13.466]}
        rotation={[0, -0.269, -0.435]}
        scale={4.315}
      />
    </group>
  )
}

useGLTF.preload('/1office_studio.glb')
